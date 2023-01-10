// TradingViewWidget.js

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_0c1a4') && 'TradingView' in window) {
          new window.TradingView.widget({
            width: 550,
            height: 300,
            symbol: "OANDA:XAUUSD",
            interval: "D",
            timezone: "Asia/Ho_Chi_Minh",
            theme: "dark",
            style: "1",
            locale: "vi_VN",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            withdateranges: true,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            save_image: false,
            container_id: "tradingview_0c1a4"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_0c1a4' />
    </div>
  );
}
