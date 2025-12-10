<template>
  <VerticalLayout>
    <PageTitle title="Utilities" subtitle="Base UI" />

    <b-row>
      <b-col xl="6">
        <UICard title="Background Color">
          <div class="bg-primary text-white p-2 mb-2">.bg-primary</div>
          <div class="bg-secondary text-white p-2 mb-2">.bg-secondary</div>
          <div class="bg-success text-white p-2 mb-2">.bg-success</div>
          <div class="bg-danger text-white p-2 mb-2">.bg-danger</div>
          <div class="bg-warning text-dark p-2 mb-2">.bg-warning</div>
          <div class="bg-info text-dark p-2 mb-2">.bg-info</div>
          <div class="bg-light text-dark p-2 mb-2">.bg-light</div>
          <div class="bg-dark p-2 mb-2">.bg-dark</div>
          <div class="bg-body text-dark p-2 mb-2">.bg-body</div>
          <div class="bg-body-secondary text-dark p-2 mb-2">.bg-body-secondary</div>
          <div class="bg-body-tertiary text-dark p-2 mb-2">.bg-body-tertiary</div>
          <div class="bg-white p-2 mb-2">.bg-white</div>
          <div class="bg-black text-white p-2 mb-2">.bg-black</div>
          <div class="bg-transparent text-dark p-2">.bg-transparent</div>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Background Gradient Color">
          <div class="p-2 mb-2 bg-primary bg-gradient text-white">.bg-gradient.bg-primary
          </div>
          <div class="p-2 mb-2 bg-secondary bg-gradient text-white">
            .bg-secondary.bg-gradient</div>
          <div class="p-2 mb-2 bg-success bg-gradient text-white">.bg-success.bg-gradient
          </div>
          <div class="p-2 mb-2 bg-danger bg-gradient text-white">.bg-danger.bg-gradient
          </div>
          <div class="p-2 mb-2 bg-warning bg-gradient text-dark">.bg-warning.bg-gradient
          </div>
          <div class="p-2 mb-2 bg-info bg-gradient text-dark">.bg-info.bg-gradient</div>
          <div class="p-2 mb-2 bg-light bg-gradient text-dark">.bg-light.bg-gradient</div>
          <div class="p-2 mb-2 bg-dark bg-gradient text-white">.bg-dark.bg-gradient</div>
          <div class="p-2 mb-2 bg-black bg-gradient text-white">.bg-black.bg-gradient
          </div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="12">
        <UICard title="Soft Background">
          <b-row>
            <b-col cols="12">
              <div class="d-flex flex-column gap-2">
                <div class="bg-primary-subtle p-2"><code class="text-primary-emphasis">.bg-primary-subtle</code>
                </div>
                <div class="bg-secondary-subtle p-2"><code class="text-secondary-emphasis">.bg-secondary-subtle </code>
                </div>
                <div class="bg-success-subtle p-2"><code class="text-success-emphasis">.bg-success-subtle</code>
                </div>
                <div class="bg-danger-subtle p-2"><code class="text-danger-emphasis">.bg-danger-subtle</code></div>
                <div class="bg-warning-subtle p-2"><code class="text-warning-emphasis">.bg-warning-subtle</code>
                </div>
                <div class="bg-info-subtle p-2"><code class="text-info-emphasis">.bg-info-subtle</code></div>
                <div class="bg-light-subtle p-2"><code class="text-light-emphasis">.bg-light-subtle</code></div>
                <div class="bg-dark-subtle p-2"><code class="text-dark-emphasis">.bg-dark-subtle</code></div>
              </div>
            </b-col>
          </b-row>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Color & Background">
          <div class="d-flex flex-column gap-2">
            <div class="text-bg-primary p-2">Primary with contrasting color
              (.text-bg-primary)</div>
            <div class="text-bg-secondary p-2">Secondary with contrasting color
              (.text-bg-secondary)</div>
            <div class="text-bg-success p-2">Success with contrasting color
              (.text-bg-success)</div>
            <div class="text-bg-danger p-2">Danger with contrasting color
              (.text-bg-danger)</div>
            <div class="text-bg-warning p-2">Warning with contrasting color
              (.text-bg-warning)</div>
            <div class="text-bg-info p-2">Info with contrasting color (.text-bg-info)
            </div>
            <div class="text-bg-light p-2">Light with contrasting color (.text-bg-light)
            </div>
            <div class="text-bg-dark p-2">Dark with contrasting color (.text-bg-dark)
            </div>
          </div>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Colored links">
          <div class="d-flex flex-column gap-2">
            <a href="#" class="link-primary">Primary link</a>
            <a href="#" class="link-secondary">Secondary link</a>
            <a href="#" class="link-success">Success link</a>
            <a href="#" class="link-danger">Danger link</a>
            <a href="#" class="link-warning">Warning link</a>
            <a href="#" class="link-info">Info link</a>
            <a href="#" class="link-light">Light link</a>
            <a href="#" class="link-dark">Dark link</a>
          </div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="12">
        <UICard title="Background Opacity">
          <div class="bg-primary p-2 text-white">This is default primary background</div>
          <div class="bg-primary p-2 text-white bg-opacity-75">This is 75% opacity primary
            background</div>
          <div class="bg-primary p-2 text-dark bg-opacity-50">This is 50% opacity primary
            background</div>
          <div class="bg-primary p-2 text-dark bg-opacity-25">This is 25% opacity primary
            background</div>
          <div class="bg-primary p-2 text-dark bg-opacity-10">This is 10% opacity success
            background</div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="12">
        <UICard title="Text Color">
          <b-row>
            <b-col md="6">
              <p class="text-primary">.text-primary</p>
              <p class="text-primary-emphasis">.text-primary-emphasis</p>
              <p class="text-secondary">.text-secondary</p>
              <p class="text-secondary-emphasis">.text-secondary-emphasis</p>
              <p class="text-success">.text-success</p>
              <p class="text-success-emphasis">.text-success-emphasis</p>
              <p class="text-danger">.text-danger</p>
              <p class="text-danger-emphasis">.text-danger-emphasis</p>
              <p class="text-warning">.text-warning</p>
              <p class="text-warning-emphasis">.text-warning-emphasis</p>
              <p class="text-info">.text-info</p>
              <p class="text-info-emphasis">.text-info-emphasis</p>
              <p class="text-light bg-dark">.text-light</p>
              <p class="text-light-emphasis">.text-light-emphasis</p>
            </b-col>
            <b-col md="6">
              <p class="text-dark">.text-dark</p>
              <p class="text-dark-emphasis">.text-dark-emphasis</p>
              <p class="text-muted">.text-muted</p>
              <p class="text-body">.text-body</p>
              <p class="text-body-emphasis">.text-body-emphasis</p>
              <p class="text-body-secondary">.text-body-secondary</p>
              <p class="text-body-tertiary">.text-body-tertiary</p>
              <p class="text-black">.text-black</p>
              <p class="text-white bg-dark">.text-white</p>
              <p class="text-black-50">.text-black-50</p>
              <p class="text-white-50 bg-dark">.text-white-50</p>
            </b-col>
          </b-row>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Text Opacity Color">
          <div class="text-primary">This is default primary text</div>
          <div class="text-primary text-opacity-75">This is 75% opacity primary text</div>
          <div class="text-primary text-opacity-50">This is 50% opacity primary text</div>
          <div class="text-primary text-opacity-25">This is 25% opacity primary text</div>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Opacity">
          <div class="d-flex flex-wrap gap-2">
            <div class="opacity-100 p-2 bg-primary text-light fw-bold rounded">100%
            </div>
            <div class="opacity-75 p-2 bg-primary text-light fw-bold rounded">75%</div>
            <div class="opacity-50 p-2 bg-primary text-light fw-bold rounded">50%</div>
            <div class="opacity-25 p-2 bg-primary text-light fw-bold rounded">25%</div>
          </div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Additive(Add) Border">
          <div class="d-flex align-items-start flex-wrap gap-4">
            <div class="text-center">
              <div class="border avatar-md bg-light bg-opacity-50"></div>
            </div>
            <div class="text-center">
              <div class="border-top avatar-md bg-light bg-opacity-50"></div>
            </div>
            <div class="text-center">
              <div class="border-end avatar-md bg-light bg-opacity-50"></div>
            </div>
            <div class="text-center">
              <div class="border-bottom avatar-md bg-light bg-opacity-50"></div>
            </div>
            <div class="text-center">
              <div class="border-start avatar-md bg-light bg-opacity-50"></div>
            </div>
          </div>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Subtractive(Remove) Border">
          <div class="d-flex align-items-start flex-wrap gap-4">
            <div class="text-center">
              <div class="border border-0 avatar-md bg-light bg-opacity-50"></div>
            </div>
            <div class="text-center">
              <div class="border border-top-0 avatar-md bg-light bg-opacity-50"></div>
            </div>
            <div class="text-center">
              <div class="border border-end-0 avatar-md bg-light bg-opacity-50"></div>
            </div>
            <div class="text-center">
              <div class="border border-bottom-0 avatar-md bg-light bg-opacity-50">
              </div>
            </div>
            <div class="text-center">
              <div class="border border-start-0 avatar-md bg-light bg-opacity-50">
              </div>
            </div>
          </div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Border Color">
          <div class="d-flex align-items-start flex-wrap gap-2">
            <div class="text-center">
              <div class="border border-primary avatar-md bg-light bg-opacity-50">
              </div>
            </div>
            <div class="text-center">
              <div class="border border-secondary avatar-md bg-light bg-opacity-50">
              </div>
            </div>
            <div class="text-center">
              <div class="border border-success avatar-md bg-light bg-opacity-50">
              </div>
            </div>
            <div class="text-center">
              <div class="border border-danger avatar-md bg-light bg-opacity-50">
              </div>
            </div>
            <div class="text-center">
              <div class="border border-warning avatar-md bg-light bg-opacity-50">
              </div>
            </div>
            <div class="text-center">
              <div class="border border-info avatar-md bg-light bg-opacity-50"></div>
            </div>
            <div class="text-center">
              <div class="border border-light avatar-md"></div>
            </div>
            <div class="text-center">
              <div class="border border-dark avatar-md bg-light bg-opacity-50"></div>
            </div>
          </div>
        </UICard>

        <UICard title="Border Width Size">
          <b-card-body>
            <div class="d-flex align-items-start flex-wrap gap-2">
              <div class="text-center">
                <div class="border border-1 avatar-md bg-light bg-opacity-50"></div>
              </div>
              <div class="text-center">
                <div class="border border-2 avatar-md bg-light bg-opacity-50"></div>
              </div>
              <div class="text-center">
                <div class="border border-3 avatar-md bg-light bg-opacity-50"></div>
              </div>
              <div class="text-center">
                <div class="border border-4 avatar-md bg-light bg-opacity-50"></div>
              </div>
              <div class="text-center">
                <div class="border border-5 avatar-md bg-light bg-opacity-50"></div>
              </div>
            </div>

          </b-card-body>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Border Opacity">
          <div class="border border-success p-2 mb-2">This is default success border</div>
          <div class="border border-success p-2 mb-2 border-opacity-75">This is 75%
            opacity success border</div>
          <div class="border border-success p-2 mb-2 border-opacity-50">This is 50%
            opacity success border</div>
          <div class="border border-success p-2 mb-2 border-opacity-25">This is 25%
            opacity success border</div>
          <div class="border border-success p-2 border-opacity-10">This is 10% opacity
            success border</div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="12">
        <UICard title="Border Subtle Color">
          <div class="d-flex align-items-start flex-wrap gap-2">
            <div class="text-center">
              <div class="border border-primary-subtle avatar-md bg-light bg-opacity-50">
              </div>
            </div>
            <div class="text-center">
              <div class="border border-secondary-subtle avatar-md bg-light bg-opacity-50">
              </div>
            </div>
            <div class="text-center">
              <div class="border border-success-subtle avatar-md bg-light bg-opacity-50">
              </div>
            </div>
            <div class="text-center">
              <div class="border border-danger-subtle avatar-md bg-light bg-opacity-50">
              </div>
            </div>
            <div class="text-center">
              <div class="border border-warning-subtle avatar-md bg-light bg-opacity-50">
              </div>
            </div>
            <div class="text-center">
              <div class="border border-info-subtle avatar-md bg-light bg-opacity-50">
              </div>
            </div>
            <div class="text-center">
              <div class="border border-light-subtle avatar-md"></div>
            </div>
            <div class="text-center">
              <div class="border border-dark-subtle avatar-md bg-light bg-opacity-50">
              </div>
            </div>
          </div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Border Radius">
          <div class="d-flex align-items-start flex-wrap gap-2">
            <img :src="avatar2" class="avatar-lg rounded" alt="rounded">
            <img :src="avatar2" class="avatar-lg rounded-top" alt="rounded-top">
            <img :src="avatar2" class="avatar-lg rounded-end" alt="rounded-end">
            <img :src="avatar2" class="avatar-lg rounded-bottom" alt="rounded-bottom">
            <img :src="avatar2" class="avatar-lg rounded-start" alt="rounded-start">
            <img :src="avatar2" class="avatar-lg rounded-circle" alt="rounded-circle">
            <img :src="small2" class="avatar-lg w-auto rounded-pill" alt="rounded-pill">
          </div>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Border Radius Size">
          <div class="d-flex align-items-start flex-wrap gap-2">
            <img :src="avatar4" class="avatar-lg rounded-0" alt="rounded-0">
            <img :src="avatar4" class="avatar-lg rounded-1" alt="rounded-1">
            <img :src="avatar4" class="avatar-lg rounded-2" alt="rounded-2">
            <img :src="avatar4" class="avatar-lg rounded-3" alt="rounded-3">
            <img :src="avatar4" class="avatar-lg rounded-4" alt="rounded-4">
            <img :src="avatar4" class="avatar-lg rounded-5" alt="rounded-5">
          </div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Text Selection">
          <p class="user-select-all">This paragraph will be entirely selected when clicked
            by the user.</p>
          <p class="user-select-auto">This paragraph has default select behavior.</p>
          <p class="user-select-none mb-0">This paragraph will not be selectable when
            clicked by the user.</p>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Pointer Events">
          <p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">This link</a>
            can not be clicked.</p>
          <p><a href="#" class="pe-auto">This link</a> can be clicked (this is default
            behavior).</p>
          <p class="pe-none"><a href="#" tabindex="-1" aria-disabled="true">This link</a>
            can not be clicked because the
            <code>pointer-events</code> property is inherited from its parent. However,
            <a href="#" class="pe-auto">this
              link</a> has a <code>pe-auto</code> class and can be clicked.
          </p>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="12">
        <UICard title="Overflow">
          <div class="d-flex flex-wrap gap-4">
            <div class="overflow-auto p-3 bg-light" style="max-width: 260px; max-height: 100px;">
              This is an example of using <code>.overflow-auto</code> on an element
              with set width and height dimensions. By
              design, this content will vertically scroll.
            </div>
            <div class="overflow-hidden p-3 bg-light" style="max-width: 260px; max-height: 100px;">
              This is an example of using <code>.overflow-hidden</code> on an element
              with set width and height dimensions.
            </div>
            <div class="overflow-visible p-3 bg-light" style="max-width: 260px; max-height: 100px;">
              This is an example of using <code>.overflow-visible</code> on an element
              with set width and height dimensions.
            </div>
            <div class="overflow-scroll p-3 bg-light" style="max-width: 260px; max-height: 100px;">
              This is an example of using <code>.overflow-scroll</code> on an element
              with set width and height dimensions.
            </div>
          </div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Position in Arrange">
          <div class="position-relative p-5 bg-light bg-opacity-50 m-3 border rounded" style="height: 180px;">
            <div class="position-absolute top-0 start-0 avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute top-0 end-0 avatar-xs bg-dark rounded"></div>
            <div class="position-absolute top-50 start-50 avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute bottom-50 end-50 avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded">
            </div>
          </div>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Position in Center">
          <div class="position-relative m-3 bg-light bg-opacity-50 border rounded" style="height: 180px;">
            <div class="position-absolute top-0 start-0 translate-middle avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute top-0 start-50 translate-middle avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute top-0 start-100 translate-middle avatar-xs bg-dark rounded">
            </div>

            <div class="position-absolute top-50 start-0 translate-middle avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute top-50 start-100 translate-middle avatar-xs bg-dark rounded">
            </div>

            <div class="position-absolute top-100 start-0 translate-middle avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute top-100 start-50 translate-middle avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute top-100 start-100 translate-middle avatar-xs bg-dark rounded">
            </div>
          </div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Position in Axis">
          <div class="position-relative m-3 bg-light border rounded" style="height: 180px;">
            <div class="position-absolute top-0 start-0 avatar-xs bg-dark rounded ">
            </div>
            <div class="position-absolute top-0 start-50 translate-middle-x avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute top-0 end-0 avatar-xs bg-dark rounded"></div>

            <div class="position-absolute top-50 start-0 translate-middle-y avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute top-50 end-0 translate-middle-y avatar-xs bg-dark rounded">
            </div>

            <div class="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-dark rounded">
            </div>
            <div class="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded">
            </div>
          </div>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Shadows">
          <div class="shadow-none p-2 mb-2 bg-light rounded">No shadow</div>
          <div class="shadow-sm p-2 mb-2 rounded">Small shadow</div>
          <div class="shadow p-2 mb-2 rounded">Regular shadow</div>
          <div class="shadow-lg p-2 mb-2 rounded">Larger shadow</div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Width">
          <div class="w-25 p-2 bg-light">Width 25%</div>

          <div class="w-50 p-2 bg-light">Width 50%</div>

          <div class="w-75 p-2 bg-light">Width 75%</div>

          <div class="w-100 p-2 bg-light">Width 100%</div>

          <div class="w-auto p-2 bg-light">Width auto</div>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Height">
          <div class="d-flex flex-wrap gap-3 align-items-start" style="height: 255px;">
            <div class="h-25 p-2 bg-light">Height25%</div>

            <div class="h-50 p-2 bg-light">Height50%</div>

            <div class="h-75 p-2 bg-light">Height75%</div>

            <div class="h-100 p-2 bg-light">Height100%</div>

            <div class="h-auto p-2 bg-light">Height auto</div>
          </div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="12">
        <UICard title="Object Fit">
          <div class="d-flex align-items-start flex-wrap gap-3 text-center">
            <div>
              <img :src="small1" class="object-fit-contain border rounded avatar-xl"
                alt="...">
              <p class="mt-1 mb-0"><code class="user-select-all">.object-fit-contain</code></p>
            </div>
            <div>
              <img :src="small1" class="object-fit-cover border rounded avatar-xl" alt="...">
              <p class="mt-1 mb-0"><code class="user-select-all">.object-fit-cover</code></p>
            </div>
            <div>
              <img :src="small1" class="object-fit-fill border rounded avatar-xl" alt="...">
              <p class="mt-1 mb-0"><code class="user-select-all">.object-fit-fill</code></p>
            </div>
            <div>
              <img :src="small1" class="object-fit-scale border rounded avatar-xl" alt="...">
              <p class="mt-1 mb-0"><code class="user-select-all">.object-fit-scale</code></p>
            </div>
            <div>
              <img :src="small1" class="object-fit-none border rounded avatar-xl" alt="...">
              <p class="mt-1 mb-0"><code class="user-select-all">.object-fit-none</code></p>
            </div>
          </div>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="12">
        <UICard title="Z-index">
          <div class="position-relative" style="height: 220px;z-index: 1;">
            <div class="z-3 position-absolute p-5 rounded-3 bg-primary-subtle"></div>
            <div class="z-2 position-absolute p-5 m-2 rounded-3 bg-success-subtle">
            </div>
            <div class="z-1 position-absolute p-5 m-3 rounded-3 bg-secondary-subtle">
            </div>
            <div class="z-0 position-absolute p-5 m-4 rounded-3 bg-danger-subtle"></div>
            <div class="z-n1 position-absolute p-5 m-5 rounded-3 bg-info-subtle"></div>
          </div>
        </UICard>
      </b-col>
    </b-row>
  </VerticalLayout>
</template>
<script setup lang="ts">
import VerticalLayout from "@/layouts/VerticalLayout.vue";

import avatar2 from "@/assets/images/users/avatar-2.jpg"
import avatar4 from "@/assets/images/users/avatar-4.jpg"
import small1 from "@/assets/images/small/small-1.jpg"
import small2 from "@/assets/images/small/small-2.jpg"
</script>