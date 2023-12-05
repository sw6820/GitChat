// src/auth/github.strategy.ts

import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy as PassportJwtStrategy } from 'passport-jwt';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(configService: ConfigService) {
    super({
      clientID: configService.get<string>('GITHUB_CLIENT_ID'), // Store in .env file
      clientSecret: configService.get<string>('GITHUB_CLIENT_SECRET'), // Store in .env file
      callbackURL: 'http://localhost:3000/auth/github/callback',
      scope: ['user:email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    // Here, you'd typically check if the user exists in your database
    // and create a new user if they don't
    return {
      githubId: profile.id,
      username: profile.username,
      accessToken,
    };
  }
}

@Injectable()
export class JwtStrategy extends PassportStrategy(PassportJwtStrategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, username: payload.username };
  }
}
