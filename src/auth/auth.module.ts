// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { UserModule } from 'src/user/user.module';
// import { PassportModule } from '@nestjs/passport';
// import { JwtStrategy } from './jwt.strategy'
// import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './constants';

// @Module({
//   imports: [
//     UserModule, 
//     PassportModule.register({ defaultStrategy: 'jwt' }),
//     JwtModule.register({
//       secret: jwtConstants.secret,
//       signOptions: { expiresIn: '60s' }
//     })
//   ],
//   providers: [AuthService, JwtStrategy],
//   exports: [AuthService, JwtModule]
// })
// export class AuthModule {}
