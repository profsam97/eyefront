const production : string = 'https://eye-server.up.railway.app';

const develop : string = 'http://192.168.33.10:5000';

const baseurl : string = process.env.NEXT_PUBLIC_SERVER || develop;

export default baseurl;