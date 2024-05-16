import NewsletterSignup from "../components/NewsletterSignup.js";
import PageContent from "../components/PageContent.js";

function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // Send the newsletter to the backend server
  console.log(email);
  return { message: "Signup successful!" };
}
