export function returnMockResponse(data: any) {
  return {
    ok: true,
    status: 200,
    json: async () => data,
  };
}
