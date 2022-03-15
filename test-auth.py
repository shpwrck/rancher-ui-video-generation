def test_canvas(page):
    page.goto("https://localhost/dashboard/auth/login")
    page.wait_for_timeout(3000)

    page.click("input[type=\"text\"]")
    page.type("input[type=\"text\"]", "admin")
    page.press("input[type=\"text\"]", "Tab")
    page.type("input[type=\"password\"]", "twelvecharacters")
    with page.expect_navigation():
        page.click("button:has-text(\"Log in with Local User\")")
    page.wait_for_timeout(3000)
    page.click("svg")

    page.hover("text=Users & Authentication")
    page.wait_for_timeout(3000)
    page.click("text=Users & Authentication")

    with page.expect_navigation():
        page.hover("text=Roles")
        page.wait_for_timeout(3000)
        page.click("text=Roles")

    page.hover("text=Administrator")
    page.wait_for_timeout(3000)
    page.click("text=Administrator")

    page.hover("text=Roles")
    page.wait_for_timeout(3000)
    page.click("text=Roles")

    page.hover("text=Cluster")
    page.wait_for_timeout(3000)
    page.click("text=Cluster")

    page.hover("text=Project/Namespaces")
    page.wait_for_timeout(3000)
    page.click("text=Project/Namespaces")

    with page.expect_navigation():
        page.hover("text=Create Project/Namespaces Role")
        page.wait_for_timeout(3000)
        page.click("text=Create Project/Namespaces Role")

    page.hover("[aria-label=\"Search\\ for\\ option\"]")
    page.wait_for_timeout(3000)
    page.click("[aria-label=\"Search\\ for\\ option\"]")

    page.hover("text=get")
    page.wait_for_timeout(3000)
    page.click("text=get")

    page.hover(".columns div:nth-child(2) .unlabeled-select")
    page.wait_for_timeout(3000)
    page.click(".columns div:nth-child(2) .unlabeled-select")

    page.hover("text=Apiservices")
    page.wait_for_timeout(3000)
    page.click("text=Apiservices")

    page.hover("svg")
    page.wait_for_timeout(3000)
    page.click("svg")

    page.click(":nth-match(:text(\"Users & Authentication\"), 2)")
    with page.expect_navigation():
        page.click("text=Auth Provider")
    page.wait_for_timeout(3000)
