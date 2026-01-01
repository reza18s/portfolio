type Props = {
  className?: string;
  title?: string;
};

function ArticleHeader({ className, title }: Props) {
  return (
    <header className={className}>
      <h2 className="h2 article-title flex items-start">{title}</h2>
    </header>
  );
}

export default ArticleHeader;
