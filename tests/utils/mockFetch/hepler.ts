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
  console.log(JSON.stringify(intendedBody), usedBody);
  return JSON.stringify(intendedBody) === usedBody;
}

export function validateUrlParams(intendedParams: string[], url: URL): boolean {
  const usedParams = url.searchParams;

  console.log(intendedParams, usedParams);

  for (const param of intendedParams) {
    if (!usedParams.has(param)) {
      return false;
    }
  }
  return true;
}

type TValidateRequestInput = {
  intendedMethod: string;
  usedMethod?: string;
  intendedParams: string[];
  url: string;
  intendedBody?: any;
  usedBody?: any;
};

export function validateRequest({
  intendedMethod,
  usedMethod,
  intendedParams,
  url,
  intendedBody,
  usedBody,
}: TValidateRequestInput): void | ReturnType<typeof createMockErrorResponse> {
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
