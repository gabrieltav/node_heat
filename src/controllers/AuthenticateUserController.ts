import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const service = new AuthenticateUserService();
    try {
      const result = await service.execute(code);
      return response.json(result);
    } catch (err) {
      return response.send({ error: "Request failed with status code 401" });
    }
  }
}

export { AuthenticateUserController };
