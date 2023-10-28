export const production : string = 'http://web-server.default.svc.cluster.local:5000';

const develop : string = 'http://192.168.33.10:5000';

const baseurl : string = process.env.NEXT_PUBLIC_SERVER || develop;


export default baseurl;