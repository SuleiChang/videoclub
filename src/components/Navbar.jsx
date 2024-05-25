
function Navbar() {

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Catalog", path: "/catalog" },
    { title: "Create", path: "/catalog/create" },
    { title: "Show", path: "/catalog/show/1" },
    { title: "Edit", path: "/catalog/edit/1" },
  ];

  return (
    <nav className="bg-gray-200 text-lg w-full md:static border-b-2">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div
          className="flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0"
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-indigo-600">
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <a
                  href="/login"
                  className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                >
                  Log in
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
