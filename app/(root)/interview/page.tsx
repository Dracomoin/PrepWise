import Agent from "@/components/Agent";
// import { getCurrentUser } from "@/lib/actions/auth.action";

const Page =  () => {


  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName="you"
        userId="user1"
        // profileImage={user?.profileURL}
        type="generate"
      />
    </>
  );
};

export default Page;
