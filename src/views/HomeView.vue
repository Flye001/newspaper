<template>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://www.keaston.bham.sch.uk/_site/images/design/logo.png" alt="" width="28" height="30" class="d-inline-block align-text-top">
      Aston School Newspaper
    </a>
  </div>
</nav>

  <div class="container-float">

    <!-- <IssueCard
    v-for="Issue in Issues"
    :key="Issue"
    :Data="Issue"
    ></IssueCard> -->

  <br>

  <div class="row">

    <div class="col col-12 col-sm-4 col-md-3">
<div class="card mb-3 mx-2">
  <img src="https://www.aljazeera.com/wp-content/uploads/2022/02/2022-02-15T040103Z_157749486_RC29FS9GHAYB_RTRMADP_3_UKRAINE-CRISIS-RUSSIA-GERMANY.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">A Recap of Russian Conflict with Ukraine</h5>
    <p class="card-text">Russia's invasion of Ukraine is ongoing. This article will resultantly be incomplete, with a comprehensive recap of events only being possible after the fact.</p>
    <p class="card-text"><small class="text-muted">Kai</small></p>
    <a class="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
    </div>

    <div class="col col-12 col-sm-4 col-md-3">
<div class="card mb-3 mx-2">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">News</h5>
    <p class="card-text">So this could maybe be like the article summed up in a sentance or 2, or just the first sentance of the article etc.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <a class="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
    </div>

    <div class="col col-12 col-sm-4 col-md-3">
<div class="card mb-3 mx-2">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">News</h5>
    <p class="card-text">So this could maybe be like the article summed up in a sentance or 2, or just the first sentance of the article etc.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <a class="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
    </div>

    <div class="col col-12 col-sm-4 col-md-3">
<div class="card mb-3 mx-2">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">News</h5>
    <p class="card-text">So this could maybe be like the article summed up in a sentance or 2, or just the first sentance of the article etc.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <a class="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
    </div>

  </div>

    <!-- <IssueCard Month="February"></IssueCard>
    <IssueCard Month="January"></IssueCard>
    <IssueCard Month="December"></IssueCard> -->

  </div>
</template>

<script>
// import IssueCard from '@/components/IssueCard.vue'
import RawIssues from '@/issues.json'

export default {
  // components: {
  //   IssueCard
  // },
  data () {
    return {
      Issues: RawIssues.Issues
    }
  }
}
</script>
