export function returnMockResponse(data: any) {
  return {
    ok: true,
    status: 200,
    json: async () => data,
  };
}

export function returnMockErrorResponse(status: number, message: string) {
  return {
    ok: false,
    status: status,
    statusText: message,
    json: async () => ({ error: message }),
  };
}

export function isCorrectMethodUsed(
  intendedMethod: string,
  usedMethod: string | undefined,
): boolean {
  return intendedMethod === usedMethod;
}

export function isBodyCorrect(intendedBody: any, usedBody: any) {
  if (intendedBody !== usedBody) {
    throw new Error(`Expected body ${intendedBody} but got ${usedBody}`);
  }
}
