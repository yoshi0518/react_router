import { useLocation } from 'react-router-dom';

const Contact = ({ message }: { message: string }) => {
  const location = useLocation();
  console.log(location);
  return <div>{`${message} Contact`}</div>;
};

export default Contact;
