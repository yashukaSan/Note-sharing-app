import type { JSX } from "react";
interface QuesAns {
  Ques: string;
  Ans: string;
}

interface SubCat {
  [subCatName: string]: QuesAns;
}

interface QuesBank {
  [catName: string]: SubCat;
}

export default function Support() {
  const quesBank: QuesBank = {
    "Account & Access": {
      "Sign-Up & Login": {
        Ques: "I’m not receiving the email verification code / password reset link. What should I do?",
        Ans: "",
      },
      "Profile Management": {
        Ques: "How do I change my display name, email, or profile picture?",
        Ans: "",
      },
      "Account Deletion": {
        Ques: "How can I delete my account or archive my data?",
        Ans: "",
      },
    },
    "Uploading & Formatting": {
      "File Types & Limits": {
        Ques: "What file formats are supported (PDF, DOCX, Markdown, images)? What is the maximum file upload size limit?",
        Ans: "",
      },
      "Formatting Issues": {
        Ques: "Why are my code blocks, math formulas (LaTeX), or bullet points formatting incorrectly when I paste notes?",
        Ans: "",
      },
      "Batch Uploads": {
        Ques: "Can I upload multiple lecture notes or an entire semester folder at once?",
        Ans: "",
      },
    },
    "Privacy & Permissions": {
      "Visibility Settings": {
        Ques: "How do I change a note from public to private or shared via unlisted link?",
        Ans: "",
      },
      "Access Control": {
        Ques: "Can I grant specific users edit access while keeping the note read-only for others?",
        Ans: "",
      },
      "Password Protection": {
        Ques: "How can I set a passcode on a shared folder or sensitive document?",
        Ans: "",
      },
    },
    "Search, Discovery & Organization": {
      "Filtering & Tags": {
        Ques: "How do tags and categories work? Can I search within handwritten PDFs or text inside uploaded images?",
        Ans: "",
      },
      Organization: {
        Ques: "Can I nest folders inside other folders or create sub-topics for my subject notes?",
        Ans: "",
      },
      "Favorites/Bookmarks": {
        Ques: "How do I save another user's public note to my private library for offline viewing?",
        Ans: "",
      },
    },
    "Copyright, Moderation & Safety": {
      "Plagiarism & Takedowns": {
        Ques: "How do I report copyrighted textbook material or unauthorized uploads of my work?",
        Ans: "",
      },
      "Inappropriate Content": {
        Ques: "How do I flag spam, abusive comments, or misleading notes?",
        Ans: "",
      },
    },
  };

  function printQuestions() {
    const sections: JSX.Element[] = [];

    for (const i of Object.entries(quesBank)) {
      const articles: JSX.Element[] = [];

      for (const j of Object.entries(i[1])) {
        articles.push(
          <article>
            <h2>{j[0]}</h2>
            <h3>{j[1].Ques}</h3>
            <p>{j[1].Ans}</p>
          </article>,
        );
      }

      sections.push(
        <section>
          <h1>{i[0]}</h1>
          <div>{articles}</div>
        </section>,
      );
    }

    return sections;
  }

  return (
    <>
      <section id="faq-section">{printQuestions()}</section>
    </>
  );
}
