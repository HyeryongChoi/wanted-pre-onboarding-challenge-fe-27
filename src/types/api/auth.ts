/** create user */
export interface PostUserRequest {
  email: string;
  password: string;
}

export interface PostUserResponse {
  message: string;
  token: string;
}

/** login user */
export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  message: string;
  token: string;
}
