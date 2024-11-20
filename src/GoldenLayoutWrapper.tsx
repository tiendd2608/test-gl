import { GoldenLayout } from "golden-layout";
import { useEffect, useRef } from "react";
// import "golden-layout/dist/css/goldenlayout-light-theme.css"; // Sử dụng giao diện mặc định
import "golden-layout/dist/css/goldenlayout-base.css";
import "golden-layout/dist/css/themes/goldenlayout-dark-theme.css";

// Các component sẽ hiển thị trong Golden Layout
const MyComponent = () => (
  <div style={{ padding: "10px" }}>Hello from MyComponent!</div>
);
const AnotherComponent = () => (
  <div style={{ padding: "10px" }}>Another Component Content</div>
);

const GoldenLayoutWrapper = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Khởi tạo Golden Layout
    const goldenLayout = new GoldenLayout(containerRef.current);

    // Đăng ký các component
    goldenLayout.registerComponent("MyComponent", MyComponent);
    goldenLayout.registerComponent("AnotherComponent", AnotherComponent);

    // Định nghĩa bố cục
    goldenLayout.loadLayout({
      root: {
        type: "row",
        content: [
          {
            type: "stack",
            content: [
              {
                type: "component",
                componentType: "MyComponent",
                title: "Panel 1",
              },
              {
                type: "component",
                componentType: "MyComponent",
                title: "Panel 2",
              },
            ],
          },
          {
            type: "stack",
            content: [
              {
                type: "component",
                componentType: "MyComponent",
                title: "Panel 3",
              },
              {
                type: "component",
                componentType: "MyComponent",
                title: "Panel 4",
              },
            ],
          },
        ],
      },
      settings: {
      },
      dimensions: {
        defaultMinItemWidth: "200px"
      }
    });

    // Render Golden Layout
    // goldenLayout.init();

    return () => {
      // Cleanup khi component unmount
      goldenLayout.destroy();
    };
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }} ref={containerRef}></div>
  );
};

export default GoldenLayoutWrapper;
