def test_canvas(page):
    page.goto("/dashboard/auth/login")
    page.wait_for_timeout(3000)

    page.click("input[type=\"text\"]")
    page.type("input[type=\"text\"]", "admin")
    page.press("input[type=\"text\"]", "Tab")
    page.type("input[type=\"password\"]", "twelvecharacters")
    with page.expect_navigation():
        page.click("button:has-text(\"Log in with Local User\")")
    page.wait_for_timeout(3000)
    page.click("svg")

    page.hover("text=Cluster Management")
    page.wait_for_timeout(3000)
    page.click("text=Cluster Management")

    page.hover("text=Create")
    page.wait_for_timeout(3000)
    page.click("text=Create")

    page.locator("button:has-text(\"Cancel\")").scroll_into_view_if_needed()
    page.wait_for_timeout(3000)

    page.hover("text=Custom")
    page.wait_for_timeout(3000)
    page.click("text=Custom")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("[placeholder=\"e\\.g\\.\\ sandbox\"]")
    page.frame(name="ember-iframe").type("[placeholder=\"e\\.g\\.\\ sandbox\"]", "example")

    page.frame(name="ember-iframe").hover("text=Expand All")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("text=Expand All")

    page.frame(name="ember-iframe").focus("text=Amazon (In-Tree)")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").focus("text=Allow unsupported versions")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").focus("th:has-text(\"Variable Name *\")")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").focus("text=Next")
    page.wait_for_timeout(3000)

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("text=Next")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").check("text=etcd >> input[type=\"checkbox\"]")
    page.frame(name="ember-iframe").check("text=Control Plane >> input[type=\"checkbox\"]")

    page.frame(name="ember-iframe").hover("text=Done")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("text=Done")
