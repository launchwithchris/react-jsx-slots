export default function Input({richText, ...props}) {
    
    const content = richText ? <textarea {...props} /> : <input {...props} />;
    
    return content;
}
