// import EditorJs from "@editorjs/editorjs";
// import Header from "@editorjs/header";
// import List from "@editorjs/list";
// import Embed from "@editorjs/embed";

const editor = new EditorJS({
    holder: "editor-area",
    tools: {
        header: {
            class: Header,
            inlineToolbar: ["link"],
            config: {
                placeholder: 'Enter a header',
                levels: [1, 2, 3, 4, 5, 6],
                defaultLevel: 3
              }
        },
        list: {
            class: List,
            inlineToolbar: true,
        },
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
        },
        table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
        },
        underline: Underline,
        embed: Embed,
        image: SimpleImage,
        Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
        },
        code: CodeTool,
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
        },
        warning: {
            class: Warning,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+W',
            config: {
              titlePlaceholder: 'Title',
              messagePlaceholder: 'Message',
            },
        },
        image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
              }
            }
        },
        quote: Quote,
        checklist: {
            class: Checklist,
            inlineToolbar: true,
        },
        personality: {
            class: Personality,
            config: {
              endpoint: 'http://localhost:8008/uploadFile'  // Your backend file uploader endpoint
            }
          }
    }
});

document.querySelector("#save-btn").addEventListener("click", async (e) => {
    try {
        const data = await editor.save();
        console.log(data);
    }
    catch(ex) {
        throw ex;
    }
});