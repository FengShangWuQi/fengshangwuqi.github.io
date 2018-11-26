export default url => {
  const d = document,
    s = d.createElement('script');
  s.src = url;
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
};
