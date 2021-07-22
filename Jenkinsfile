
def createTime() {
    return new Date().getTime()
}

pipeline {
    agent any
    environment {
        BRANCH_NAME = sh(returnStdout: true, script: "echo ${GIT_BRANCH} | sed 's/origin\\///g'").trim()
        APP_NAME = "hotfix-for-android-node"
        IMAGE_TAG = "${BRANCH_NAME}-${createTime()}"
        REPO = "4px-giws-registry-vpc.cn-shenzhen.cr.aliyuncs.com/fe-test"
    }

    stages {

        stage('Build Image') {
            steps {
                echo '****************************** delete container and image... ******************************'
                sh 'docker ps -a|grep $APP_NAME|awk \'{print $1}\'|xargs -i docker stop {}|xargs -i docker rm {}'
                sh 'docker images|grep $APP_NAME|grep \'{print $3}\'|xargs -i docker rmi {}'

                echo '****************************** build image... ******************************'
                sh 'docker build --build-arg PROFILE=dev -t $APP_NAME .'
            }
        }

        stage('Push Image') {
            steps {
                echo '****************************** login docker repo... ******************************'
                sh 'docker login --username=S16017@4pxtech --password=fpxfe123456 4px-giws-registry-vpc.cn-shenzhen.cr.aliyuncs.com'
                echo '****************************** push image... ******************************'
                sh 'docker tag ${APP_NAME}:latest $REPO/${APP_NAME}:${IMAGE_TAG}'
                sh 'docker tag ${APP_NAME}:latest $REPO/${APP_NAME}:latest'
                sh 'docker push $REPO/${APP_NAME}:${IMAGE_TAG}'
            }
        }

        stage('Deploy Image') {
            steps {
                sshagent(credentials: ['fe-test-ssh']) {
                    echo '****************************** pull repo... ******************************'
                    sh 'docker pull $REPO/${APP_NAME}:${IMAGE_TAG}'
                    echo '****************************** restart image... ******************************'
                    sh 'docker run --name $APP_NAME -d -p 3000:3000 $APP_NAME'
                }
            }
        }
    }
}