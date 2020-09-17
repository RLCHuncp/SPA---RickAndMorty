const getHash = () =>
location.hash.slice(1).toLocateLowerCase().split('/')[1] || '/';

export default getHash;