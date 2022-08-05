import Form from "@awsui/components-react/form";
import Input from "@awsui/components-react/input";
import Container from "@awsui/components-react/container";
import SpaceBetween from "@awsui/components-react/space-between";
import Button from "@awsui/components-react/button";
import { ButtonDropdown, Header } from "@awsui/components-react";
import AppLayout from "@awsui/components-react/app-layout";
import React, { useState, useEffect } from "react";
import BreadcrumbGroup from "@awsui/components-react/breadcrumb-group";
import Pagination from "@awsui/components-react/pagination";
import Table from "@awsui/components-react/table";
import SideNavigation from "@awsui/components-react/side-navigation";
import "./App.css";

const breadcrumbGroup = [
  {
    text: "Developer Tools",
    href: "/",
  },
  {
    text: "CodeCommit",
    href: "/",
  },
  {
    text: "Repositories",
    href: "/",
  },
];

const buttonDropDownClone = [
  {
    id: "Clone HTTPS",
    text: "Clone HTTPS",
  },
  {
    id: "Clone SSH",
    text: "Clone SSH",
  },
  {
    id: "Clone HTTPS(GRC)",
    text: "Clone HTTPS(GRC)",
  },
  {
    id: "Connection steps",
    text: "Connection steps",
  },
]

const buttonDropDownNotify = [
  {
    id: "Clone HTTPS",
    text: "Clone HTTPS",
  },
]

const tableItems = [
  {
    name: "readydoc-ui",
    alt: "First",
    description: "-",
    lastModified: "14 hours ago",
    cloneurl: ["HTTPS", "SSH", "HTTPS (GRC)"]
  },
  {
    name: "readydoc-api",
    alt: "Second",
    description: "-",
    lastModified: "15 hours ago",
    cloneurl: ["HTTPS", "SSH", "HTTPS (GRC)"]
  },
  {
    name: "digitalform-api",
    alt: "Third",
    description: "-",
    lastModified: "3 days ago",
    cloneurl: ["HTTPS", "SSH", "HTTPS (GRC)"]
  },
  {
    name: "digitalform-ui",
    alt: "Fourth",
    description: "-",
    lastModified: "6 days ago",
    cloneurl: ["HTTPS", "SSH", "HTTPS (GRC)"]
  },
]

const columnDefinitions = [
  {
    id: "name",
    header: "Name",
    cell: e => e.name,

  },
  {
    id: "description",
    header: "Description",
    cell: e => e.description
  },
  {
    id: "lastModified",
    header: "Last modified",
    cell: e => e.lastModified
  },
  {
    id: "clone_url",
    header: "Clone URL",
    cell: e => e.cloneurl.map(ele => <Button variant="link" iconName="copy" key={ele}>{ele}</Button>)
  },

]

const sideBarData = [
  {
    type: "section",
    text: "Source.codecommit",
    items: [
      {
        type: "link",
        text: "Getting started",
        href: "#/getting_started"
      },
      {
        type: "link",
        text: "Repositories",
        href: "/#"
      },
      {
        type: "link",
        text: "Approval rule templates",
        href: "#/approval"
      },
    ]
  },
  {
    type: "section",
    text: "Artifacts. CodeArtifact",
    defaultExpanded: false,
    items: [
      {
        type: "link",
        text: "Page 7",
        href: "#/page7"
      },
      {
        type: "link",
        text: "Page 8",
        href: "#/page8"
      },
      {
        type: "link",
        text: "Page 9",
        href: "#/page9"
      }
    ]
  },
  {
    type: "section",
    text: "Build. CodeBuild",
    defaultExpanded: false,
    items: [
      {
        type: "link",
        text: "Page 7",
        href: "#/page7"
      },
      {
        type: "link",
        text: "Page 8",
        href: "#/page8"
      },
      {
        type: "link",
        text: "Page 9",
        href: "#/page9"
      }
    ]
  },
  {
    type: "section",
    text: "Deploy. CodeDeploy",
    defaultExpanded: false,
    items: [
      {
        type: "link",
        text: "Page 7",
        href: "#/page7"
      },
      {
        type: "link",
        text: "Page 8",
        href: "#/page8"
      },
      {
        type: "link",
        text: "Page 9",
        href: "#/page9"
      }
    ]
  },
  {
    type: "section",
    text: "Pipeline. CodePipeline",
    defaultExpanded: false,
    items: [
      {
        type: "link",
        text: "Page 7",
        href: "#/page7"
      },
      {
        type: "link",
        text: "Page 8",
        href: "#/page8"
      },
      {
        type: "link",
        text: "Page 9",
        href: "#/page9"
      }
    ]
  },
  {
    type: "section",
    text: "Settings",
    defaultExpanded: false,
    items: [
      {
        type: "link",
        text: "Page 7",
        href: "#/page7"
      },
      {
        type: "link",
        text: "Page 8",
        href: "#/page8"
      },
      {
        type: "link",
        text: "Page 9",
        href: "#/page9"
      }
    ]
  },
  {
    type: "link",
    text: "Go to Resources",
  },
  {
    type: "link",
    text: "Feedback",
  }
]

function App() {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (selectedItems.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

  }, [selectedItems])
  return (
    <AppLayout
      content={
        <Form header={<BreadcrumbGroup items={breadcrumbGroup} />}>
          <Container
            header={
              <div className="header">
                <div className="header_top">
                  <h2 className="title" >
                    Repositories
                  </h2>
                  <div className="button_group">
                    <Button variant="normal" iconName="refresh" onClick={() => { setDisabled(true); setSelectedItems([]) }} />
                    <ButtonDropdown variant="normal" items={buttonDropDownNotify} disabled={disabled}>Notify</ButtonDropdown>
                    <ButtonDropdown variant="normal" items={buttonDropDownClone} disabled={disabled}>Clone URL</ButtonDropdown>
                    <Button variant="normal" disabled={disabled}>View repository</Button>
                    <Button variant="normal" disabled={disabled}>Delete repository</Button>
                    <Button variant="primary">Create repository</Button>
                  </div>
                </div>
                <div className="header_bottom">
                  <div className="search">
                    <Input
                      type="search"
                      value={inputValue}
                      onChange={(event) => setInputValue(event.detail.value)}
                    />
                  </div>
                  <div className="pagination">
                    <Pagination currentPageIndex={1} pagesCount={1} />
                    <Button iconName="settings" variant="icon" />
                  </div>
                </div>
              </div>
            }
          >
            <SpaceBetween direction="vertical" size="l">
              <Table
                onSelectionChange={({ detail }) => { console.log(detail); setSelectedItems(detail.selectedItems) }
                }
                selectedItems={selectedItems}
                columnDefinitions={columnDefinitions}
                items={tableItems}
                selectionType="single"
              />
            </SpaceBetween>
          </Container>
        </Form>
      }
      navigation={
        <>
          <Sidebar />
        </>
      }

    />
  );
}

export default App;

const Sidebar = () => {
  const [activeHref, setActiveHref] = React.useState(
    "/#"
  );
  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "/", text: "CodeCommit" }}
      items={sideBarData}
    />
  );
}