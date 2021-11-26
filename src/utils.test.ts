import { formatPhoneNumber } from "./utils";

describe('Format phone number', () => {
  it('10 digit phone number formated ', async () => {
    expect(
      formatPhoneNumber("2130010012"),
    ).toBe("(213) 001 0012");
  });
});
