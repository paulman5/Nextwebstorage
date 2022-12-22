import React from "react";

export interface KanbanDataModel {
    Id?: string;
    Title?: string;
    Status?: string;
    Summary?: string;
    Type?: string;
    Priority?: string;
    Tags?: string;
    Estimate?: number;
    Assignee?: string;
    RankId?: number;
    Color?: string;
  }