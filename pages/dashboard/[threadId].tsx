import { useRouter } from 'next/router';

const TreadId = () => {
  const router = useRouter();
  const { threadId } = router.query;
  return (
    <div>
      <h1>{threadId}</h1>
    </div>
  );
};

export default TreadId;
