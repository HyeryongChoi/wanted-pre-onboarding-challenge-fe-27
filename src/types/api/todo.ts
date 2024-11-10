/** get todo */
export interface TodoData {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

/** get todos */
export interface GetTodoListResponse {
  data: TodoData[];
}

/** get todo */
export interface GetTodoResponse {
  data: TodoData;
}

/** get todo */
export interface GetTodoRequest {
  id: string;
}

/** create todo */
export interface PostTodoRequest {
  title: string;
  content: string;
}

/** update todo */
export interface PutTodoRequest {
  id: string;
  title: string;
  content: string;
}

/** delete todo */
export interface DeleteTodoRequest {
  id: string;
}

export interface DeleteTodoResponse {
  data: null;
}
