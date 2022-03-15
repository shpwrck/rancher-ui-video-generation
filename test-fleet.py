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

    page.hover("text=Continuous Delivery")
    page.wait_for_timeout(3000)
    page.click("text=Continuous Delivery")

    page.hover("text=Clusters 1")
    page.wait_for_timeout(3000)
    page.click("text=Clusters 1")

    page.hover("td:has-text(\"local\")")
    page.wait_for_timeout(3000)
    page.click("td:has-text(\"local\")")

    page.hover("text=Cluster Groups")
    page.wait_for_timeout(3000)
    page.click("text=Cluster Groups")
    
    page.hover("td:has-text(\"default\")")
    page.wait_for_timeout(3000)
    page.click("td:has-text(\"default\")")

    page.hover("text=Git Repos")
    page.wait_for_timeout(3000)
    page.click("text=Git Repos")

    page.hover("text=Create")
    page.wait_for_timeout(3000)
    page.click("text=Create")

    page.hover("[placeholder=\"A\\ unique\\ name\"]")
    page.wait_for_timeout(3000)
    page.click("[placeholder=\"A\\ unique\\ name\"]")

    page.wait_for_timeout(3000)
    page.type("[placeholder=\"A\\ unique\\ name\"]", "example")

    page.hover("[placeholder=\"e\\.g\\.\\ https\\:\\/\\/github\\.com\\/rancher\\/fleet-examples\\.git\"]")
    page.wait_for_timeout(3000)
    page.click("[placeholder=\"e\\.g\\.\\ https\\:\\/\\/github\\.com\\/rancher\\/fleet-examples\\.git\"]")

    page.wait_for_timeout(3000)
    page.type("[placeholder=\"e\\.g\\.\\ https\\:\\/\\/github\\.com\\/rancher\\/fleet-examples\\.git\"]", "https://github.com/rancher/fleet-examples.git")

    page.hover("text=Deploy With")
    page.wait_for_timeout(3000)
    page.click("text=Deploy With")

    page.hover("text=Add Path")
    page.wait_for_timeout(3000)
    page.click("text=Add Path")

    page.hover("[placeholder=\"e\\.g\\.\\ \\/directory\\/in\\/your\\/repo\"]")
    page.wait_for_timeout(3000)
    page.click("[placeholder=\"e\\.g\\.\\ \\/directory\\/in\\/your\\/repo\"]")

    page.wait_for_timeout(3000)
    page.type("[placeholder=\"e\\.g\\.\\ \\/directory\\/in\\/your\\/repo\"]", "/single-cluster/manifests")

    page.hover("button:has-text(\"Create\")")
    page.wait_for_timeout(3000)
    page.click("button:has-text(\"Create\")")

    page.hover("text=Clusters")
    page.wait_for_timeout(3000)
    page.click("text=Clusters")

    with page.expect_navigation():
        page.hover("a:has-text(\"local\")")
        page.wait_for_timeout(3000)
        page.click("a:has-text(\"local\")")

    page.hover("svg")
    page.wait_for_timeout(3000)
    page.click("svg")

    page.hover("a:has-text(\"local\")")
    page.wait_for_timeout(3000)
    page.click("a:has-text(\"local\")")

    page.hover("div:nth-child(3) .header .icon")
    page.wait_for_timeout(3000)
    page.click("div:nth-child(3) .header .icon")

    page.hover("[aria-label=\"Search\\ for\\ option\"] div")
    page.wait_for_timeout(3000)
    page.click("[aria-label=\"Search\\ for\\ option\"] div")

    page.hover("text=fleet-manifest-example")
    page.wait_for_timeout(3000)
    page.click("text=fleet-manifest-example")
    page.click("text=fleet-manifest-example")

    page.hover("text=Installed Apps")
    page.wait_for_timeout(3000)
    page.click("text=Installed Apps")

    with page.expect_navigation():
        page.hover("td:has-text(\"example-single-cluster-manifests\")")
        page.wait_for_timeout(3000)
        page.click("td:has-text(\"example-single-cluster-manifests\")")
