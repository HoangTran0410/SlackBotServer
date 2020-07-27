const express = require("express");
const app = express();
const port = 80;

// https://stackoverflow.com/questions/42128238/how-can-i-read-the-data-received-in-application-x-www-form-urlencoded-format-on
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// Parse JSON bodies (as sent by API clients)
// app.use(express.json());

const data = {
  response_type: "in_channel",
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Tạo Đánh Giá Mới*",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Chọn người dùng",
      },
      accessory: {
        type: "users_select",
        placeholder: {
          type: "plain_text",
          text: "Select a user",
          emoji: true,
        },
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Chọn Mục Đánh Giá",
      },
      accessory: {
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Select an item",
          emoji: true,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "*this is plain_text text*",
              emoji: true,
            },
            value: "value-0",
          },
          {
            text: {
              type: "plain_text",
              text: "*this is plain_text text*",
              emoji: true,
            },
            value: "value-1",
          },
          {
            text: {
              type: "plain_text",
              text: "*this is plain_text text*",
              emoji: true,
            },
            value: "value-2",
          },
        ],
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Gửi Đánh Giá",
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: "Send",
          emoji: true,
        },
        value: "click_me_123",
      },
    },
  ],
};

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(data);
});

app.listen(port, () => {
  console.log("App started");
  console.log(`Rating app listening at http://localhost:${port}`);
});
