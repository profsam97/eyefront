const production : string = 'https://eye-server.up.railway.app';

const develop : string = 'http://eye-server:5000';

const baseurl : string = process.env.NEXT_PUBLIC_SERVER || 'http://host.docker.internal:5000';

export default baseurl;