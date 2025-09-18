import "./App.css";
import { Api, PostModel } from "./api";
import { Layout, WelcomeHero } from "./components/layout";
import { PostList } from "./components/post-list";

function App() {
    const api = new Api();
    const posts: PostModel[] = api.postList();
  return (
    <Layout>
      <WelcomeHero></WelcomeHero>
      <div className="divider"></div>
      <PostList posts={posts}></PostList>
    </Layout>
  );
}

export default App;
