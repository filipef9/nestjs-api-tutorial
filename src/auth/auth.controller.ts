import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto";

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDTO): any {
    console.log({ dto });
    return this.authService.signup();
  }

  @Post('signin')
  signin(): any {
    return this.authService.signin();
  }

}