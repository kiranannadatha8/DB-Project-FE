import { useState } from "react";
import NavBar from "./nav-bar";
import pubData from "@/constants/publications.json";
import authData from "@/constants/authors.json";
import { pubColumns, authColumns } from "../columns";
import { DataTableWrapper } from "../data-table-wrapper";

function getPublications() {
  return pubData;
}

function getAuthors() {
  return authData;
}

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState("Publications");
  const publicationsData = getPublications();
  const authorData = getAuthors();

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-start justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of publications and authors than you can search
            and add filters to them.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <NavBar />
        </div>
      </div>
      {currentTab === "Publications" ? (
        <DataTableWrapper
          columns={pubColumns}
          data={publicationsData}
          setTab={setCurrentTab}
          currentTab={currentTab}
        />
      ) : (
        <DataTableWrapper
          columns={authColumns}
          data={authorData}
          setTab={setCurrentTab}
          currentTab={currentTab}
          className="table-fixed"
        />
      )}
    </div>
  );
}
