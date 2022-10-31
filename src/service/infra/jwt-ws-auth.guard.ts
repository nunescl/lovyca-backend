import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtWsAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async canActivate(ctx: ExecutionContext): Promise<any> {
    const request = ctx.switchToHttp().getRequest();
    const [bearer, accessToken] = request.headers['authorization'].split(' ');

    if (!accessToken) {
      throw new ForbiddenException();
    }

    // const secret = this.configService.get<string>('SECRET_KEY_FIREBASE');
    // const verifyToken = this.jwtService.verify(accessToken, {
    //   secret,
    //   publicKey: this.configService.get<string>('PUBLIC_KEY_FIREBASE'),
    //   algorithms: ['RS256'],
    // });
    // console.log(verifyToken);

    const decodedToken = this.jwtService.decode(accessToken);

    if (!decodedToken) {
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }
}
