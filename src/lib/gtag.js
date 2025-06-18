export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Rastreia visualizações de páginas
export const pageview = (url) => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
    });
};

// Rastreia eventos customizados
export const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
// Inicializa o Google Analytics