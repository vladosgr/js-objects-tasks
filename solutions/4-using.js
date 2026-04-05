// BEGIN
export default function getDomainInfo(domainInfo) {
  let scheme = 'http';
  let name = domainInfo;
  if (domainInfo.startsWith('https://')) {
    scheme = 'https';
    name = domainInfo.replace('https://', '');
  } else if (domainInfo.startsWith('http://')) {
    scheme = 'http';
    name = domainInfo.replace('http://', '');
  }
  return { scheme, name };
}
// END