// File: src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center py-4">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Praveen Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
