// components/Sidebar.js
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/plants">
              <a>Fiches de Plantes</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/actions">
              <a>Fiches d'Actions</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/timelines">
              <a>Timelines</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .sidebar {
          width: 200px;
          background-color: #2c3e50;
          height: 100vh;
          padding: 20px;
          color: white;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 20px 0;
        }
        a {
          color: white;
          text-decoration: none;
          font-size: 18px;
          transition: color 0.3s;
        }
        a:hover {
          color: #3498db;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
