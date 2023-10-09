"use client";
import { LoginForm } from "@/components/LoginForm";
import { UserList } from "@/components/UserList";
import UserProfile from "@/components/UserProfile";
import userProfile from "@/devData/userProfile";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showText, useShowText] = useState(false);

  return (
    <main>
      <h1>Home page</h1>
      <button>click me</button>
      <div>
        <label htmlFor="randomText">Input a random text</label>
        <input id="randomText" placeholder="randomText" />
      </div>
      <div>
        <input value={"Test value"} />
      </div>
      <div>
        {showText && <span>Display this sometimes</span>}
        <button onClick={() => useShowText(!showText)}>show text</button>
      </div>
      <div data-testid="user-profile">
        <UserProfile {...userProfile()} />
      </div>
      <br />
      <UserList />
      <br />
      <LoginForm />
    </main>
  );
}
