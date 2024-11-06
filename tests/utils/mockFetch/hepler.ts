export function createMockSuccessResponse(data: any) {
  return {
    ok: true,
    status: 200,
    json: async () => data,
  };
}

export function createMockErrorResponse(status: number, message: string) {
  return {
    ok: false,
    status: status,
    statusText: message,
    json: async () => ({ error: message }),
  };
}

export function validateHttpMethod(
  intendedMethod: string,
  usedMethod: string | undefined,
): boolean {
  return intendedMethod === usedMethod;
}

export function validateRequestBody(intendedBody: any, usedBody: any) {
  return JSON.stringify(intendedBody) === JSON.stringify(usedBody);
}

export function validateUrlParams(intendedParams: string[], url: URL): boolean {
  const usedParams = url.searchParams;

  for (const param of intendedParams) {
    if (!usedParams.has(param)) {
      return false;
    }
  }
  return true;
}

export function validateRequest(
  intendedMethod: string,
  usedMethod: string | undefined,
  intendedParams: string[],
  url: string,
  intendedBody?: any,
  usedBody?: any,
): void | ReturnType<typeof createMockErrorResponse> {
  if (!validateHttpMethod(intendedMethod, usedMethod)) {
    return createMockErrorResponse(
      405,
      'Mismatch between intended and used method',
    );
  }

  if (!validateUrlParams(intendedParams, new URL(url))) {
    return createMockErrorResponse(
      400,
      'Mismatch between intended and used params',
    );
  }

  if (
    intendedBody &&
    usedBody &&
    !validateRequestBody(intendedBody, usedBody)
  ) {
    return createMockErrorResponse(
      400,
      'Mismatch between intended and used body',
    );
  }
}
