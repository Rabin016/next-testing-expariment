export default function User({ userData }) {
  // console.log(props);
  const { title, firstName, lastName } = userData;
  return <div>{title}</div>;
}
