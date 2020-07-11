import React from "react";
import { Card, Feed } from "semantic-ui-react";

const PingCard = () => (
  <Card>
    <Card.Content>
      <Card.Header>Recent Activity</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image="/images/ping7.png" />
          <Feed.Content>
            <Feed.Date content="1 day ago" />
            <Feed.Summary>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="/images/ping7.png" />
          <Feed.Content>
            <Feed.Date content="1 days ago" />
            <Feed.Summary>Molly Malone Needs your attention</Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="/images/ping7.png" />
          <Feed.Content>
            <Feed.Date content="1 days ago" />
            <Feed.Summary>Join us in the Zoom meeting</Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image="/images/ping7.png" />
          <Feed.Content>
            <Feed.Date content="1 days ago" />
            <Feed.Summary>Careers Meeting</Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

export default PingCard;
