//this is just a normal footer that gives help information for the website
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white text-center p-4 mt-6">
        <p className="text-sm">
          This is the student portal for a list of attending students.
        </p>
        <p className="text-sm mt-2">
          If there are any issues, please call{" "}
          <a href="tel:18885551234" className="text-blue-400 hover:underline">
            1 (888) 555-1234
          </a>{" "}
          or email{" "}
          <a
            href="mailto:support@newgenerations.edu"
            className="text-blue-400 hover:underline"
          >
            support@newgenerations.edu
          </a>
          .
        </p>
      </footer>
    );
  }