interface DownloadCardProps {
  title: string;
  description: string;
  fileName: string;
  fileUrl: string;
}

export default function DownloadCard({
  title,
  description,
  fileName,
  fileUrl,
}: DownloadCardProps) {
  return (
    <div className="bg-white border border-[var(--border-color)] rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg
            className="w-6 h-6 text-[var(--gold)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[var(--navy)] mb-1 break-words">
            {title}
          </h3>
          <p className="text-sm text-[var(--text-muted)] mb-3 break-words">
            {description}
          </p>
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-xs text-[var(--text-muted)] break-all">
              {fileName}
            </span>
            <a
              href={fileUrl}
              download
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--gold)] hover:text-[var(--gold-hover)] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
