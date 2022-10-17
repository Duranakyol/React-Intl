import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import { useState } from "react";

const messages = {
  "de-DE": {
    title: "Hallo Welt!",
    description: "Sie haben {count} neue Nachricht!",
  },
  "en-US": {
    title: "Hello World!",
    description: "You have {count} new messages",
  },
};

function App() {
  const [locale, setLocale] = useState("de-DE");

  return (
    <div className="App">
      <div className="container">
        <IntlProvider locale="locale" messages={messages[locale]}>
          <FormattedMessage id="title" />
          <p>
            <FormattedMessage id="description" values={{ count: 3 }} />
          </p>
          <br />
          <button
            onClick={() => {
              setLocale("de-DE");
            }}
          >
            DE
          </button>
          <button
            onClick={() => {
              setLocale("en-US");
            }}
          >
            EN
          </button>
        </IntlProvider>
      </div>
    </div>
  );
}

export default App;
