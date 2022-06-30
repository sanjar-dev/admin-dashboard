import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Overview } from "../../assets/overview.svg";
import { ReactComponent as Tickets } from "../../assets/tickets.svg";
import { ReactComponent as Ideas } from "../../assets/ideas.svg";
import { ReactComponent as Contacts } from "../../assets/contacts.svg";
import { ReactComponent as Agents } from "../../assets/agents.svg";
import { ReactComponent as Articles } from "../../assets/articles.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as Subscription } from "../../assets/subscription.svg";

export const Layout = () => {
  return (
    <>
      <div className="layout">
        <aside className="layout-sidebar">
          <div className="logo">
            <Logo className="logo-icon" />
            <h1>Dashboard Kit</h1>
          </div>
          <section>
            <div className="layout-item">
              <Overview className="layout-item-icon"></Overview>
              <p>Todo List</p>
            </div>
            <div className="layout-item">
              <Overview className="layout-item-icon"></Overview>
              <p>Overview</p>
            </div>
            <div className="layout-item">
              <Tickets className="layout-item-icon"></Tickets>
              <p>Tickets</p>
            </div>
            <div className="layout-item">
              <Ideas className="layout-item-icon" />
              <p>Ideas</p>
            </div>
            <div className="layout-item">
              <Contacts className="layout-item-icon" />
              <p>Contacts</p>
            </div>
            <div className="layout-item">
              <Agents className="layout-item-icon" />
              <p>Agents</p>
            </div>
            <div className="layout-item">
              <Articles className="layout-item-icon" />
              <p>Articles</p>
            </div>
          </section>
          <section>
            <div className="layout-item">
              <Settings className="layout-item-icon" />
              <p>Settings</p>
            </div>
            <div className="layout-item">
              <Subscription className="layout-item-icon" />
              <p>Subscription</p>
            </div>
          </section>
          <section>
            <div className="layout-item">
              <Settings className="layout-item-icon" />
              <p>Settings</p>
            </div>
            <div className="layout-item">
              <Subscription className="layout-item-icon" />
              <p>Subscription</p>
            </div>
          </section>
        </aside>
        <Outlet />
      </div>
    </>
  );
};
