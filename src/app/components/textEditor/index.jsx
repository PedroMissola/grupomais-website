'use client';

import dynamic from 'next/dynamic';

const TinyEditor = dynamic(() => 
  import('@tinymce/tinymce-react').then(mod => mod.Editor), 
  { 
    ssr: false,
    loading: () => <div className="h-40 border rounded-lg p-4 bg-gray-50 animate-pulse" />
  }
);

export default function RichTextEditor({ value, onChange }) {
  const handleEditorChange = (content) => {
    onChange(content);
  };

  return (
    <div className="rich-text-editor">
      <TinyEditor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY} // Adicione a API key aqui
        value={value}
        onEditorChange={handleEditorChange}
        init={{
          height: 300,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </div>
  );
}