export function formatPhoneNumber(phoneNumber: string):string {
    var match = phoneNumber.match(/(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return ['(', match[1], ') ', match[2], ' ', match[3]].join('');
    }
    return '';
  }