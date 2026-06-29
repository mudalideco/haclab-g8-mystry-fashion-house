export function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--muted)] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-[var(--muted)]">
              © 2024 G8 Mystry Fashion House 256. All rights reserved.
            </p>
            <p className="text-sm text-[var(--muted)] mt-1">
              Makindye, Kampala, Uganda
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.96H7.9v-2.92h2.54V9.41c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.92h-2.34V22C18.34 21.13 22 17 22 12z" />
              </svg>
            </a>
            <a
              href="https://wa.me/256755101840"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.11 17.62c-.3-.15-1.72-.85-2-.9s-.45-.15-.64.15-.75.9-1 1.1-.18.18.75.9 1.1 1.78c.21.18.35.23.74.09.9-.42 1.65-.48 1.7-.48.05.01.22.09.34.22.12.12.12.65.18.98c.06.33.06.65-.06.78-.12.23-.5.35-1 .54-.65.27-2.2.35-3.2.23-.49-.06-1.47-.2-2.38-.83-.5-.3-.85-.42-1.15-.7-.3-.28-.5-.42-.64-.42-.14 0-.3-.03-.42-.1-.35-.18-1.22-.35-1.9-.58-.9-.33-1.6-.7-2.13-1.22-.53-.52-.5-.65-.27-1.17.23-.52.3-.65.42-.78.12-.12.27-.32.42-.45.14-.15.2-.3.3-.42.1-.12.1-.65.05-1.18-.05-.15-.15-.3-.3-.4z" />
              </svg>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-[var(--muted)]">
              Powered by{' '}
              <a
                href="https://haclab.net"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-medium text-[var(--primary)]"
              >
                Haclab Co Ltd
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}